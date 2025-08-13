import { 
    useEffect,
    useRef
} from 'react'
const AudioPlayer = ({audioUrl,mimeTye}) =>{
    const audioPlayer = useRef(null)
    const audioSource = useRef(null)

    useEffect(()=>{
        if(audioPlayer.current && audioSource.current){
            audioSource.current.src = audioUrl
            audioPlayer.current.play()

        }
    },[audioUrl])

    return (
        <div className="flex relative z-10 my-4 w-full">
            {/* controls 声音的播放面板*/}
            <audio 
                ref={audioPlayer} 
                src={audioUrl} 
                controls
                className='w-full h-14 rounded-lg bg-white
                shadow-xl shadow-black/5 ring-1 ring-slate-700/10'
            >
                {/* 浏览器兼容声音的类型不一样 所以会有多个source */}
                <source src={audioSource} type={mimeTye} />
            </audio>
        </div>
    )
}
export default AudioPlayer
