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
        console.log(el)
        observer.observe(element);

    }


    static filter(elements, state = "in"){
        //If it's an id
        if(elements.startsWith('#')){
            const el = document.querySelector(elements);

            let arr = [];
            if(state === "in"){
                arr.push(elements);
                return el.isIntersecting;
                return (el.isIntersecting) ? arr : null;
            }
            else if(state === "out"){
                arr.push(elements);
                return "non";
                return (!elements.isIntersecting) ? arr : null;
            }
            else{
                return "surement";
                return arr;
            }
        }
        //Or
        else{
            return elements;
        }
    }


    static in(){

    }


}