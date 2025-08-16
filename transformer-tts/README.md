# Transformer.js TTS 在浏览器中运行的AI语音模型

这是一个在浏览器中直接运行的文本转语音(TTS)应用，使用了Hugging Face的Transformer.js库。

## 技术栈

- React 18
- Vite 5
- Transformer.js
- SpeechT5 TTS 模型

## 功能特点

- 完全在浏览器中运行，无需服务器支持
- 使用Hugging Face的预训练TTS模型
- 支持多种语音音色
- 基于Web Workers实现，避免阻塞主线程
- 使用WebAssembly加速AI模型推理

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 部署到Vercel

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. Vercel会自动检测到这是一个Vite项目并正确配置构建设置
4. 点击部署即可

或者使用Vercel CLI:

```bash
# 安装Vercel CLI
npm install -g vercel

# 部署
vercel
```

## 注意事项

- 首次加载时需要从Hugging Face下载模型文件，可能需要一些时间
- 模型文件较大，建议在良好的网络环境下使用
- 由于模型在浏览器中运行，较老或性能较低的设备可能体验不佳

## 浏览器兼容性

- 需要支持WebAssembly的现代浏览器
- 需要支持Web Workers
- 需要支持ES Modules