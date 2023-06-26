import React, { useState, useRef } from "react";
import './Recording.css';

const Recording_recorder = () => {
    const [recording, setRecording] = useState(false);
    const [content, setContent] = useState();
    const mediaRecorder = useRef(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();

        const audioChunks = [];
        mediaRecorder.current.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.current.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            setContent(audioUrl);  // 保存バイナリデータ
        });

        setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorder.current) {
            mediaRecorder.current.stop();
            setRecording(false);
        }
    };

    return (
        <div>
            <h2 className="title2"> 回答の録音を開始してください。</h2>
            
            <div className="button-container">
                <button 
                    className={`button ${recording ? 'active' : ''}`}
                    onClick={startRecording}
                >
                    Start Recording
                </button>
                <button 
                    className={`button ${recording ? '' : 'active'}`}
                    onClick={stopRecording}
                    disabled={!recording}
                >
                    Stop Recording
                </button>
            </div>

            {content && <audio src={content} controls />}
        </div>

    );
};

export default Recording_recorder;