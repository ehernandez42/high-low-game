"use client"

import React, {useEffect, useRef} from 'react';

const GameBoard = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null)
    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            context.current = ctx;

            if (context.current) {
                context.current.fillStyle = '#b4d4bc';
                context.current.fillRect(0, 0, 800, 500);
            }
        }
    }, []);

    return (
        <div>
            <h1 className='text-2xl'>Game board</h1>
            <canvas ref={canvasRef} width={800} height={500}></canvas>
        </div>
    );
};

export default GameBoard;
