# React Transformer TextToSpeech

- transformer
    transformer.js  JS AI 机器学习库
    来自于huggingface社区 全球最大开源大模型社区
    将模型下载到浏览器端，JS 开发者的智能战场未来
- 项目的亮点
    - 使用transformer.js 的端模型
    - 使用tailwindcss 原子css 几乎不用写css了
        类名文档语义很好，特别适合AI生成
        移动端适配 兼容所有设备 高效解决适配 w-full + max-w-md 底层是mediaQuery
    - webworker nlp 任务
        1.延迟加载大模型
        2.先实现组件再实例化，有利于性能
        3.卸载时移除事件
    - 封装组件
    - 单例模式：多次执行tts ai 业务，但是只会实例化一次，减小开销
- 项目的难点
    - 单例模式封装 MyTextToSpeechPipeline
    - getInstance 只实例化一次
    - 懒执行 延迟加载模型
    - Promise.all + nlp 流程的理解(tokenizer,model,vocoder)

- audio 标签的url <- Object.createObjectURL(blob) <- 二进制数据位 <- ttsModel 生成 
    <- input_id(tokenizer分词) + speaking_embeddings + vocoder(合成器) <- tokenizer + speaking

    - blob是一个二进制文件，createObjectURL 根据文件返回一个本地可访问的本地浏览器的地址
    - 大模型不负责给你全局访问的地址，开销太大了
    - Object.createObjectURL 是一个唯一的url地址，临时访问
    - 可以在audio标签中使用
    - 用完后，要revokeObjectURL 释放内存

- 端模型 前端智能的未来
- 单例模式 推迟到要生成语音的时候再实例化
    - 懒执行 延迟加载模型
    - 只实例化一次
    - 多次执行tts ai 业务，但是只会实例化一次，减小开销
- Promise.all() 一次性下载全部模型
- 在前端使用机器模型