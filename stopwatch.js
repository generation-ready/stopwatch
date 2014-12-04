// Copyright (C)2007 Windy Road
// This work is licensed under a Creative Commons Attribution 2.5 License.  See http://creativecommons.org/licenses/by/2.5/au/


function StopWatch() {
    this.startTime = new Date();
    this.endTime = null;

    this.stop = function() {
        this.startTime = null;
    }

    this.reset = function() {
        this.startTime = new Date();
    }

    this.resume = function(currentms) {

        this.startTime = new Date();
        if (!isNaN(currentms)){
            this.startTime = this.startTime-currentms;
        }
    }

    this.duration = function() {
        return (new Date())-this.startTime;
    }
}
