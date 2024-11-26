import React,{useState} from 'react';

const About = () => {
  const[name , setName]=useState(' ');
  const[Gender , setGender]=useState('');
  const[Age , setAge]=useState('');
  const[Declaration , setDeclaration]=useState(false);
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label>Gender: </label>
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>

        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" name="age" />
        </div>
        <label htmlFor="Declaration">Declaration</label>
        <input type="checkbox" name="Declaration" id="" />      
        <div>
          <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default About;
