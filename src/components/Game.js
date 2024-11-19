import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const Game = () => {
    const gameContainerRef = useRef(null);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameContainerRef.current,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload() {
            this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
            // Load other assets
        }

        function create() {
            this.add.image(400, 300, 'sky');
            // Add game objects
        }

        function update() {
            // Game logic
        }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainerRef}></div>;
};

export default Game;
