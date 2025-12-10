import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";

export async function GET() {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = authUser.userId;

    // Get task counts by status
    const [totalTasks, todoTasks, inProgressTasks, doneTasks] =
      await Promise.all([
        db.task.count({ where: { userId } }),
        db.task.count({ where: { userId, status: "TODO" } }),
        db.task.count({ where: { userId, status: "IN_PROGRESS" } }),
        db.task.count({ where: { userId, status: "DONE" } }),
      ]);

    // Get recent tasks
    const recentTasks = await db.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 5,
    });

    return NextResponse.json({
      stats: {
        total: totalTasks,
        todo: todoTasks,
        inProgress: inProgressTasks,
        done: doneTasks,
      },
      recentTasks,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
