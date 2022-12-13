const taskOne = (passengers:number, shuffle:number)=>{
    let count: number = 0;
    const boarded: object [] = [];
    const reservation: object [] = [];
    let locations: string [] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];
    let n: number = passengers/50;
    let diff: number;
    let startIndexBoarded: number;
    let endIndexBoarded: number;
    if (n >= 1) {
        if (Math.floor(n) > shuffle) {
            startIndexBoarded = 50 * (Math.floor(n) - 1)
            // startIndex
            endIndexBoarded = 50 * Math.floor(n);
            // endIndexBoarded
            count = endIndexBoarded/50;
            for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
                boarded.push({
                    name: `passenger${i + 1}`,
                    location: locations[i%5]
                })
            }
            // boarded
            for (let i = endIndexBoarded; i < passengers; i++) {
                reservation.push({
                    name: `passenger${i + 1}`,
                    location: locations[i%5]
                })
            }
            // reservation
        } else {
            passengers % 50 > 0 ? n = Math.floor(n) : n = n - 1;
            // n
            diff = passengers - (50 * n)
            diff
            startIndexBoarded = 50 * n;
            startIndexBoarded
            endIndexBoarded = startIndexBoarded + (Math.floor(diff/5) * 5);
            endIndexBoarded
            count = Math.ceil(endIndexBoarded/50)
            // count
            if (diff % 5 === 0) {
                for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
                    boarded.push({
                        name: `passenger${i + 1}`,
                        location: locations[i%5]
                    })
                }
            } else {
                if (diff > 5) {
                    for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
                        boarded.push({
                            name: `passenger${i + 1}`,
                            location: locations[i%5]
                        })
                    }
                    for (let i = endIndexBoarded; i < passengers; i++) {
                        reservation.push({
                            name: `passenger${i + 1}`,
                            location: locations[i%5]
                        })
                    }
                } else {
                    for (let i = endIndexBoarded; i < passengers; i++) {
                        reservation.push({
                            name: `passenger${i + 1}`,
                            location: locations[i%5]
                        })
                    }
                }
            }
        }
    } else {
       diff = passengers;
       startIndexBoarded = 0;
       endIndexBoarded = Math.floor(diff/5) * 5;
       count = Math.ceil(endIndexBoarded/diff);
       if (diff % 5 === 0) {
            for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
                boarded.push({
                    name: `passenger${i + 1}`,
                    location: locations[i%5]
                })
            }
        } else {
            if (diff > 5) {
                for (let i = startIndexBoarded; i < endIndexBoarded; i++) {
                    boarded.push({
                        name: `passenger${i + 1}`,
                        location: locations[i%5]
                    })
                }
                for (let i = endIndexBoarded; i < passengers; i++) {
                    reservation.push({
                        name: `passenger${i + 1}`,
                        location: locations[i%5]
                    })
                }
            } else {
                for (let i = endIndexBoarded; i < passengers; i++) {
                    reservation.push({
                        name: `passenger${i + 1}`,
                        location: locations[i%5]
                    })
                }
            }
        }
    }
    return {
        boarded,
        reservation,
        count
    } 
}
taskOne(60, 1)
export default taskOne;