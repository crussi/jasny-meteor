

    Template['layout-auth'].helpers({
        isReady: function(sub){
            console.log("check if isReady");

            if(sub){
                return FlowRouter.subsReady(sub);
            } else {
                return FlowRouter.subsReady();
            }
        }
    });









