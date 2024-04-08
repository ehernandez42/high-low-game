import GameBoard from "@/Components/GameBoard";





export default function Home() {


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>High Low Game</h1>
            <GameBoard />
        </main>
    );
}
