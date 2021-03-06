var TownSelectionController = function($scope){
    var _this = this;

    _this.townsSelected = 0;

    this.isMoreThanTwoSelected = function(){
        var numberOfTownsSelected = 0;
            _.each($scope.nodes, function(town){
            if(town.selected){
                numberOfTownsSelected++;
            }
        });

        return numberOfTownsSelected >= 2;
    };

    this.highlightNode = function(index){
        d3.select("#force-layout").selectAll(".node").each(function(d,i){
            if(d.name == $scope.nodes[index].name){
                var currentColor = d3.select(this).attr("style").slice(6,d3.select(this).attr("style").length-1);
                if(currentColor == "rgb(128, 128, 128)"){
                    d3.select(this).attr('r', 7)
                        .style("fill", "yellow");
                } else if(currentColor == "rgb(255, 255, 0)" && currentColor != "rgb(128, 128, 128)"){
                    d3.select(this).attr('r', 5)
                        .style("fill", "rgb(128, 128, 128)");
                }
            }
        });
    }
};
railroadRoute.controller('townSelectionController', TownSelectionController);