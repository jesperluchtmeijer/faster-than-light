<template>
    <div>
        <div>Start timer</div>
        
        <div>Timer: {{timer}} ticks</div>
        <div class="w-64 h-64 bg-slate-600">
            <div v-if="gameActive == false" @click="this.startGame" class="w-64 h-64 bg-slate-600">
                <div class="text-white">Start</div>
            </div>
            <div v-else-if="gameActive == 'waiting'" class="w-64 h-64 bg-orange-400" @click="endGameByFault">
                <div class="text-black">Wait</div>
            </div>
            <div v-else-if="gameActive == 'toFast'" class="w-64 h-64 bg-red-500">
                <div class="text-black">To fast</div>
                <div class="text-black" @click="this.startGame">Restart</div>
            </div>
            <div v-else-if="gameActive == true" @click="endGame" class="w-64 h-64 bg-green-500">
                <div class="text-black">Stop Time</div>
            </div>
            <div v-else-if="gameActive == 'timeOut'" class="w-64 h-64 bg-red-500">
                <div class="text-black">Time-out</div>
                <div class="text-black" @click="this.startGame">Restart</div>
            </div>

        </div>
    </div>
</template>
<script>
 export default {
    data(){
        return{
            timer: 0,
            responseTime: 0,
            gameActive: false,
            intervalId: null, 
            timeoutId: null, 
        }
    },
    methods:{
        startTimer(){
            this.timer = 0;
            this.intervalId = setInterval(() => {   
                this.timer++;
                console.log(this.timer, "ticks");
                if (this.timer >= 700) {
                clearInterval(this.intervalId);
                this.endGameByTimeOut();
            }
            }, 1);
        },
        randomTimer(){
            const randomTime = Math.floor(Math.random() * 4000) + 2000;
            console.log(randomTime);
            this.timeoutId = setTimeout(() => {
                this.gameActive = true;
                this.startTimer();
            }, randomTime);
        },
        startGame(){
            this.gameActive = "waiting";
            this.randomTimer();
        },
        endGame(){
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId);
            this.gameActive = false;
            this.responseTime = this.timer;
            console.log("Response time: ", this.responseTime, "ticks");
        },
        endGameByFault(){
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId); 
            this.gameActive = 'toFast';
            this.responseTime = 0;
            this.timer = 0;
        },
        endGameByTimeOut(){
            this.gameActive = 'timeOut';
            console.log("Response time: Time-out");
        },
    },
 }
</script>
                        
