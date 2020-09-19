import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
          <div className='developeinfor'>
          <img className='developeinfor__image' src='http://www.simpleimageresizer.com/_uploads/photos/73122428/footer-image_1_200x200.jpg' alt='loading'/>  
    
          <div className='developeinfor__bio'>
            <h4 className='developeinfor__bio--name'>Hello word Developer</h4>
            <span className='developeinfor__bio--expt'>[i like to buil websides using MERN technilogy]</span>
          </div>
          </div>

          <div className='customerFeedback'> 
          <span className='customerFeedback--heading'>Advise us How we can help you</span>
          <p className='customerFeedback--para'>Voice of customers can become one of your most powerful weapons if you want to increase your bottom line and create positive experiences. Not only are you able to gather business ideas and suggestions, but you’re getting them from the most valuable group – your website’s visitors.</p>
          </div>

          <div >
          <form action="" className='feedbackForm' onSubmit={e=> e.preventDefault()}>
       <label for="">Enter Email</label>
            <input type="email"/>
          <label for="">Enter message</label>
          <input type="text"/>
          <button>Submit</button>
          </form>

          </div>

        </footer>
    );
}

export default Footer;
