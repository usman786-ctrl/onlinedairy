import {combineReducers} from 'redux';
import authReducert from './Authreducer';
import DashbordData from './DashbordData';
import editData from './EditFoemReducer';
import PublicStories from './publicStories';
import Slide from './LoaderReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth :authReducert,
    form: formReducer,
    DashbordData:DashbordData,
    editData:editData,
    PublicData:PublicStories,
    slider:Slide

})