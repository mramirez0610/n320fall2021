class Instrument 
{
    constructor(loudness, family, verb)
    {
        this.family = family;
        this.verb = verb; 
        this.loudness = loudness;
    }

    playInstruments()
    {
        console.log(this.family + " " + this.verb + " at " + this.loudness + " decibels");
    }
}

class WoodWind extends Instrument 
{
    constructor(loudness, family, verb)
    {
        super(loudness, "Woodwinds", "play");
    }
}

class Strings extends Instrument 
{
    constructor(loudness, family, verb)
    {
        super(loudness, "Strings", "strum");
    }
}

class Percussion extends Instrument 
{
    constructor(loudness, family, verb)
    {
        super(loudness, "Percussion", "drums");
    }
}

let instruments = []
instruments[0] = new Strings(Math.floor(Math.random() * 100));
instruments[1] = new WoodWind(Math.floor(Math.random() * 100));
instruments[2] = new Percussion(Math.floor(Math.random() * 100));

instruments.forEach((instrument) => {
    instrument.playInstruments();
})

console.log("The conductor smiles")