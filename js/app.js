angular.module('fontly', []).controller("fontCalculator", function(){
  this.font = 0;
  this.breakpoints = [
    {
      pixel: 320
    },
    {
      pixel: 480
    },
    {
      pixel: 768
    },
    {
      pixel: 992
    },
    {
      pixel: 1170
    },
    {
      pixel: 1200
    }
  ]

  this.add = function(newbreakpoint){
    console.log("adding breakpoint: " + newbreakpoint + " px");
    var breakpoint = {pixel:newbreakpoint};
    this.breakpoints.push(breakpoint);
    breakpoint = {};
  };
});
