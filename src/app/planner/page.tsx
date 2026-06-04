import Link from "next/link";

// 行程规划工作台（/planner）——目前为框架占位：
// 左侧输入区、右侧结果区、底部 Tab。生成逻辑与交互后续实现。

const TABS = ["行程", "旅行账单", "行李清单"];

export default async function PlannerPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="flex min-h-screen flex-col">
      {/* 顶部操作栏 */}
      <header className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <Link href="/" className="text-sm text-gray-600 hover:text-teal-600">
          ← 返回首页
        </Link>
        <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-teal-600 hover:text-teal-600">
          保存行程
        </button>
      </header>

      <main className="grid flex-1 grid-cols-1 gap-6 p-6 lg:grid-cols-[360px_1fr]">
        {/* 左侧输入区 */}
        <section className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div>
            <h1 className="text-lg font-bold text-gray-900">AI 行程助手</h1>
            <p className="text-sm text-gray-500">告诉我你的旅行想法</p>
          </div>
          <textarea
            defaultValue={q ?? ""}
            className="h-40 w-full resize-none rounded-xl border border-gray-200 p-3 text-sm outline-none focus:border-teal-500"
            placeholder="例如：我想去青岛玩 3 天，预算 2000，喜欢海边和美食"
          />
          <button className="rounded-full bg-teal-600 px-6 py-3 font-medium text-white hover:bg-teal-700">
            生成行程
          </button>
        </section>

        {/* 右侧结果区 */}
        <section className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          {/* 底部 Tab（此处置顶展示，占位） */}
          <div className="mb-6 flex gap-2 border-b border-gray-100">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium ${
                  i === 0
                    ? "border-b-2 border-teal-600 text-teal-600"
                    : "text-gray-500 hover:text-teal-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 空状态 */}
          <div className="flex flex-1 flex-col items-center justify-center gap-2 py-20 text-center">
            <div className="text-4xl">🧳</div>
            <h2 className="text-lg font-semibold text-gray-700">了解你的行程</h2>
            <p className="text-sm text-gray-400">在左侧告诉 AI 你的旅行想法</p>
          </div>
        </section>
      </main>
    </div>
  );
}
