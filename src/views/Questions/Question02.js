import QuizQuestion from '../QuizQuestion/QuizQuestion';

class Question02 extends QuizQuestion{
    constructor(props){
        super(props);
        this.state = {
            multi:false,
            question:'When you do leave your home, where do you go?',
            showresults:false,
            canproceed:false,
            answers:[
                {
                    copy:'To work',
                    color:'#9dd5e2',
                    points:'0',
                    correct:false
                },
                {
                    copy:'To purchase necessary supplies only',
                    color:'#7bc3d5',
                    points:'3',
                    correct:true
                },
                {
                    copy:'To visit family',
                    color:'#60b2c8',
                    points:'4',
                    correct:false
                },
                {
                    copy:'To visit friends',
                    color:'#4ba3bc',
                    points:'5',
                    correct:false
                }
            ],
            message:'The CDC recommends ...',
            source:'Cite source here.',
            questionpanelnumber:2,
            nextpanel:'03',
            selected:[]
        };
    }
}

export default Question02;