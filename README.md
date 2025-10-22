# 💸 移动支付应用

一个现代化的移动端支付应用，使用 React + TypeScript + Vite 构建，具有流畅的用户界面和完整的支付流程。

## ✨ 特性

- 📱 **移动优先设计** - 专为移动设备优化的用户界面
- 💰 **完整支付流程** - 从金额输入到支付完成的完整体验
- 🎨 **现代化 UI** - 使用 Tailwind CSS 构建的优雅界面
- ⚡ **快速开发** - 基于 Vite 的快速构建和热重载
- 🔒 **类型安全** - 完整的 TypeScript 支持
- 📦 **组件化** - 可复用的 UI 组件

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- pnpm

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
pnpm run build
```

### 预览生产版本

```bash
pnpm run preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用 UI 组件
│   ├── ui/             # 基础 UI 组件 (Button, Input, Avatar 等)
│   └── ...
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 主页 - 金额输入
│   ├── PayPage.tsx     # 支付页面 - 联系人选择
│   └── SuccessPage.tsx # 成功页面 - 支付完成
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
└── ...
```

## 🎯 核心功能

### 主页 (`/`)
- 金额输入键盘
- 实时金额显示
- 支付/请求按钮

### 支付页面 (`/pay`)
- 联系人搜索和选择
- 智能联系人匹配
- 支付信息填写
- 动态联系人生成

### 成功页面 (`/success`)
- 支付成功确认
- 交易详情显示
- 完成导航

## 🛠 技术栈

- **前端框架**: React 18
- **开发语言**: TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **路由管理**: React Router
- **图标库**: Lucide React
- **UI 组件**: 自定义组件库

## 🎨 设计特色

- **渐变背景** - 清新的绿色渐变主题
- **微交互** - 按钮点击动画和过渡效果
- **响应式设计** - 完美的移动端体验
- **无障碍支持** - 遵循 WCAG 标准

## 📱 页面预览

### 主页
- 金额输入界面
- 数字键盘交互
- 顶部导航图标

### 支付页面  
- 联系人列表
- 搜索功能
- 表单填写

### 成功页面
- 成功状态展示
- 交易确认信息

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 创建新组件
2. 在 `App.tsx` 中添加路由
3. 使用 `useNavigate` 进行页面跳转

### 自定义样式

项目使用 Tailwind CSS，可以通过修改 `tailwind.config.js` 来自定义主题：

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        // 添加自定义颜色
      }
    }
  }
}
```

## 📦 部署

### Vercel 部署 (推荐)

```bash
npm install -g vercel
vercel
```

### Netlify 部署

```bash
npm run build
# 上传 dist 文件夹到 Netlify
```

### 静态文件部署

构建后，`dist` 文件夹可以部署到任何静态文件服务器。

## 🤝 贡献指南

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Vite](https://vitejs.dev/) - 快速的前端构建工具
- [React](https://reactjs.org/) - 用户界面库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Lucide](https://lucide.dev/) - 图标库

---

**注意**: 这是一个演示项目，不包含真实的支付处理功能。请勿用于生产环境中的真实交易。

这个 README 文档更加详细和专业，包含了项目的特色、使用方法、技术栈说明等，适合用于项目展示和开发文档。