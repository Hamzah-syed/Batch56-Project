"use server"

export let placeOrder = async () => {
    await fetch("https://simple-books-api.glitch.me/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 592e72fc99c6f248c9a4c46b8f596cfac219214dd31b5cc881cdc4ce0b22e408`
        },
        body: JSON.stringify({
            "bookId": 4,
            "customerName": "Ali"
        })
    })
}
