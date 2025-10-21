# Payment App UI

一个现代化的支付应用界面，使用 React、Next.js、Tailwind CSS 和 shadcn/ui 构建。

A modern payment application interface built with React, Next.js, Tailwind CSS, and shadcn/ui.

## ✨ 特性 Features

- 🎨 **精美的 UI 设计** - 仿照主流支付应用的界面设计
- ⌨️ **交互式数字键盘** - 带有按压特效和动画反馈
- 🔍 **实时搜索过滤** - 输入收款人时实时搜索联系人列表
- 📱 **响应式设计** - 完美适配移动端和桌面端
- ✅ **成功动画** - 流畅的支付成功确认动画
- 🎯 **单选联系人** - 从建议列表中选择收款人
- 📜 **独立滚动区域** - 联系人列表独立滚动，表单固定

## 🛠️ 技术栈 Tech Stack

- **框架 Framework**: Next.js 15 (App Router)
- **UI 库 UI Library**: React 19
- **样式 Styling**: Tailwind CSS v4
- **组件库 Components**: shadcn/ui
- **字体 Fonts**: Google Fonts (Inter, Roboto Mono)
- **语言 Language**: TypeScript

## 📦 安装 Installation

\`\`\`bash
# 克隆项目
git clone <repository-url>

# 进入项目目录
cd payment-app-ui

# 安装依赖
pnpm install

## 🚀 运行 Running

\`\`\`bash
# 开发模式
pnpm dev
\`\`\`

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 📁 项目结构 Project Structure

\`\`\`
payment-app-ui/
├── app/
│   ├── page.tsx              # 首页 - 数字键盘界面
│   ├── pay/
│   │   └── page.tsx          # 支付表单页面
│   ├── success/
│   │   └── page.tsx          # 支付成功页面
│   ├── layout.tsx            # 根布局
│   └── globals.css           # 全局样式
├── components/
│   └── ui/                   # shadcn/ui 组件
├── public/                   # 静态资源
└── README.md
\`\`\`

## 🎯 主要功能 Key Features

### 1. 首页 Home Page
- 绿色渐变背景
- 大号金额显示（$0）
- 3x4 数字键盘布局
- Request 和 Pay 按钮
- 底部导航栏

### 2. 支付页面 Payment Page
- 金额显示和 Pay 按钮
- 收款人输入（To）
- 备注输入（For）
- 支付方式选择（Use）
- 建议联系人列表（Suggested）
  - 实时搜索过滤
  - 单选模式
  - 独立滚动区域
  - 加载状态

### 3. 成功页面 Success Page
- 绿色对勾动画
- 交易信息显示
- Done 按钮返回首页

## 🎨 设计特点 Design Highlights

- **颜色方案**: 绿色主题（#4CAF50 系列）
- **字体**: Inter（界面）+ Roboto Mono（数字）
- **动画**: 流畅的过渡和交互反馈
- **布局**: 移动端优先的响应式设计

## 🔧 自定义 Customization

### 修改主题色 Change Theme Color

编辑 `app/globals.css` 中的 CSS 变量：

\`\`\`css
@theme inline {
  /* 修改这些值来改变主题色 */
  --color-primary: #4CAF50;
  --color-primary-dark: #45a049;
}
\`\`\`

### 添加更多联系人 Add More Contacts

编辑 `app/pay/page.tsx` 中的 `allContacts` 数组：

\`\`\`typescript
const allContacts = [
  {
    id: 1,
    name: "Your Name",
    username: "$yourhandle",
    avatar: "/placeholder.svg?height=48&width=48"
  },
  // 添加更多联系人...
];
\`\`\`

## 📝 开发说明 Development Notes

- 使用 shadcn/ui 组件保持设计一致性
- 所有动画使用 Tailwind CSS 类
- 状态管理使用 React Hooks
- 路由使用 Next.js App Router

## 🤝 贡献 Contributing

欢迎提交 Issue 和 Pull Request！

Issues and Pull Requests are welcome!

---

**注意 Note**: 这是一个 UI 演示项目，不包含真实的支付功能。

This is a UI demonstration project and does not include real payment functionality.
