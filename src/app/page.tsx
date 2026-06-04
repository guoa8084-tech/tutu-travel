"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/brand";

// 首页（参考「鲁行」布局）：左侧文字 + 输入框，右侧吉祥物占位。
// 蓝绿渐变风格。输入与示例词为框架级交互，AI 生成逻辑后续实现。

const EXAMPLE_WORDS = [
  "青岛 3 天海滨游",
  "泰山日出 2 日",
  "曲阜文化深度游",
  "济南泉城美食之旅",
];

export default function HomePage() {
  const router = useRouter();
  const [input, setInput] = useState("");

  function handleSend() {
    const q = input.trim();
    router.push(q ? `/planner?q=${encodeURIComponent(q)}` : "/planner");
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
      {/* 背景装饰圆点 */}
      <div className="pointer-events-none absolute right-10 top-40 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-10 h-40 w-40 rounded-full bg-emerald-200/30 blur-2xl" />

      {/* 顶部导航 */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-12">
        <div className="flex items-center gap-2">
          <Image src="/mascot.png" alt={BRAND.name} width={36} height={36} />
          <span className="text-xl font-bold text-gray-900">{BRAND.name}</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-teal-600">首页</Link>
          <Link href="/#features" className="hover:text-teal-600">功能</Link>
          <Link href="/planner" className="hover:text-teal-600">我的行程</Link>
          <button className="rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm hover:border-teal-400 hover:text-teal-600">
            登录
          </button>
        </nav>
      </header>

      {/* Hero 区 */}
      <main className="relative z-10 mx-auto grid w-full flex-1 grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-20">
        {/* 左侧：文字 + 输入框 */}
        <section className="flex w-full max-w-xl flex-col gap-6">
          <span className="w-fit rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
            ✦ {BRAND.tagline}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            你好，我是
            <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
              {BRAND.name}
            </span>
            <br />
            你的 AI 旅行助手
          </h1>

          <p className="max-w-md text-base leading-relaxed text-gray-500">
            {BRAND.heroSubtitle}
          </p>

          {/* 输入框 */}
          <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-2 pl-5 shadow-lg shadow-teal-100/50">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="例：青岛 3 天，海鲜啤酒海滨…"
              className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            {/* 麦克风（占位，语音功能后续实现） */}
            <button
              aria-label="语音输入"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:bg-gray-50"
            >
              <MicIcon />
            </button>
            <button
              onClick={handleSend}
              aria-label="发送"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-white hover:opacity-90"
            >
              <ArrowUpIcon />
            </button>
          </div>

          {/* 示例快捷词：点击填入输入框 */}
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_WORDS.map((word) => (
              <button
                key={word}
                onClick={() => setInput(word)}
                className="rounded-full border border-gray-200 bg-white/70 px-4 py-1.5 text-sm text-gray-600 hover:border-teal-400 hover:text-teal-600"
              >
                + {word}
              </button>
            ))}
          </div>
        </section>

        {/* 右侧：吉祥物 */}
        <section className="hidden items-center justify-center lg:flex">
          <div className="relative">
            {/* 背景光晕 */}
            <div className="absolute inset-0 -z-10 m-auto h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
            <Image
              src="/mascot.png"
              alt={`${BRAND.name} 吉祥物`}
              width={360}
              height={360}
              priority
              className="drop-shadow-xl"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 18v4" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}
