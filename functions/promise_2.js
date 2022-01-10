setTimeout(() => {
    console.log("Running callback1...")

    setTimeout(() => {
        console.log("Running callback2...")
        
        setTimeout(() => {
            console.log("Running callback3...")   
        }, 2000)   
    }, 2000)
}, 2000)