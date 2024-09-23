import { useState } from 'react';
import './Todo.css';
export function Todo(){

    let [tasks, setTasks] = useState([
        {
            checked: true,
            task: "Boodschappen"
        },
        {
            checked: false,
            task: "Eten Koken"
        },
        {
            checked: false,
            task: "Les Geven"
        }
    ])

    function onClick(index){
        //Ik maak een kopie van de array
        let t = [...tasks];
        //Invert de boolean. True wordt false, false wordt true
        t[index].checked = !t[index].checked;
        //Set de nieuwe array
        setTasks(t);
    }
    return(
        <ul className="todo">
            {tasks.map((value, index)=>{
                if(!value.checked)
                    {
                        return <li className="todo__item" onClick={()=>onClick(index)}>
                            {value.task}
                        </li>
                    }
                else{
                    return <li className="todo__item checked" onClick={()=>onClick(index)}>
                        {value.task}
                    </li>
                }
            }

                
            )}
        </ul>
    )
}