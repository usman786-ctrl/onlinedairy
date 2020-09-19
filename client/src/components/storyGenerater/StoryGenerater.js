
import React,{Component} from 'react';
import {reduxForm , Field} from 'redux-form';
import RenderTextField from '../../reduxFromField/index';
import RenderCheckBox from '../../reduxFromField/renderCheckBox';
import {Button,Radio} from '@material-ui/core';
import RadioButton from '../../reduxFromField/RenderRadio';
import {connect} from 'react-redux';
import StoryFormValidation from '../../reduxFromField/StoryGeneraterValidations';
import {createStory,updateData} from '../../Actions';


class Stoygenerater extends Component{

    sendData=(val)=>{



        if(this.props.update==='update'){

            const {title,status,comments,body,id} =  val;
            const data={title,status,comments,body,id};
            updateData(data);
            this.props.history.push('/dashbord')


        }else{



            const obj =  this.props.auth.profile;
            const data={...val,userid:obj.getName()+' '+obj.getId(),imageURL:obj.getImageUrl()}
            createStory(data);
            this.props.history.push('/dashbord')

        }

       

    

    }
    render(){
        // console.log('initialValues '+(this.props));
    const {handleSubmit}=this.props;
    return(
        <div className='storyGenerater'>
            <h4>Share new story private or public</h4>


        <form onSubmit={handleSubmit(val=> this.sendData(val))} noValidate autoComplete className="stroy-form">
        <Field
        
        name="title"
        component={RenderTextField}
        label='Enter title'
        margin='normal'

       
     />
        <Field
        name="body"
        component={RenderTextField}
        label='Enter your body'
        length='5'
        margin='normal'
       

    />
     <Field name="status" component={RadioButton} 
        margin='normal'
     
     >
          <Radio value="public" label="public" />
          <Radio value="private" label="private" />
     </Field>

    <Field
        name="comments"
        component={RenderCheckBox}
        label='Allow comments'
        margin='normal'


    />



 

  

    <Button 
    type='submit'
     variant='contained'
    fullWidth
    margin='normal'
    style={{margin:'1rem 0rem'}}

     
     color='primary'

    >{this.props.update?'update story': 'Create Story'}</Button>




        </form>
        </div>

    )
}
}


const mapStateToPros=(state)=>{
    return {auth:state.auth, initialValues: state.editData.data,update: state.editData.update}
  }  
  


const form = reduxForm({
    form: 'stoeyForm',
    validate:StoryFormValidation,

  });
export default connect(mapStateToPros,{


})(form(Stoygenerater));




