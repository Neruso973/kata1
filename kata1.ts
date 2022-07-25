class Hero {
    name: string
    level: number;
    experience: number; 

    constructor(name: string, lv: number, xp: number ){
        this.name = name;
        this.level = lv;
        this.experience = xp;
    }
    showHero() {
        console.log("I'm ",this.name, "level:", this.level, "with", this.experience, "xp")
    }
    showLv() {
        console.log(this.level)
    }
    showXp() {
        console.log(this.experience)
    }
    earnXp(xp: number) {
        let newXp: number = this.experience + xp
        let levelUp: number = this.level * 1000
        if (newXp < levelUp) {
            return this.experience = newXp;
        }
        if (newXp === levelUp) {
            this.level ++;
            this.experience = 0;
            return
        }
        while (newXp > levelUp) {
            this.level ++;
            newXp = newXp - levelUp;
            levelUp = this.level * 1000;
            this.experience = newXp
            if(this.level === 30){
             return this.experience = newXp
            }
        }
        if(newXp === levelUp) {
            this.level ++;
            this.experience = 0;
        }
    }
}

let Benoit: Hero = new Hero("Benoit", 1, 1)

Benoit.showHero();
Benoit.earnXp(999);
Benoit.showHero();
