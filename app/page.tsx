export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-2 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-4/5 w-4/5">
                <h4 className="text-m font-bold">Sorry I didn&apos;t call mum, these are my weekly plans:</h4>
                <iframe src="https://www.google.com/maps/d/embed?mid=1R5bFr-kTFKCoxYdPVao5QJ5AbC33TwI&ehbc=2E312F" width="100%" height="100%"></iframe>
            </main>
        </div>
    )
}
