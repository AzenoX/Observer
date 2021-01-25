class Observer{


    constructor(el, clk = null, threshold = 1.0) {

        let element;
        let callback;


        /*=====================================

            Get element

        =====================================*/
        //If it's a HTMLElement
        if(typeof el == "object"){
            element = el;
        }
        //If it's a String
        else if(typeof el == "string"){
            //If it's a class
            if(el.startsWith('.')){
                element = document.querySelectorAll(el);
            }
            //If it's an id or something else
            else{
                element = document.querySelector(el);
            }
        }


        /*=====================================

            Get Callback Function

        =====================================*/
        if(clk !== null){
            callback = clk;
        }
        else{
            callback = function(entries, observer){
                entries
                    .filter((ent) => {return ent.isIntersecting}) //Filter only intersecting
                    .forEach((ent) => console.log(ent)); //Console Log
            }
        }


        /*=====================================

            Options

        =====================================*/
        let options = {
            threshold: threshold
        }


        /*=====================================

            Observe

        =====================================*/
        let observer = new IntersectionObserver(callback, options);
        observer.observe(element);

    }


    static filter(elements){
        return elements.filter((el) => {return el.isIntersecting});
    }


}