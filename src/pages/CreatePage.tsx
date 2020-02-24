import React, {KeyboardEventHandler, useState, useContext} from "react";
import {getBaseUrl} from "../config/baseUrl";
import {useHttp} from "../hooks/http.hook";
import {HttpMethods} from "../utils/constants";
import {AuthContext} from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const CreatePage = () => {
  const history = useHistory();
  const {request} = useHttp();
  const [link, setLink] = useState<string>('');
  const auth = useContext(AuthContext);
  const pressHandler: KeyboardEventHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request(`${getBaseUrl()}/api/link/generate`, HttpMethods.POST, { from: link }, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) {}
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
        <div className="input-field">
          <input
            type="text"
            id="link"
            value={link}
            onChange={ event => {setLink(event.target.value)}}
            onKeyPress={pressHandler}
          />
          <label htmlFor={link}>Введите ссылку</label>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
