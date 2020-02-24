import React, {useCallback, useContext, useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {getBaseUrl} from "../config/baseUrl";
import {useHttp} from "../hooks/http.hook";
import {HttpMethods} from "../utils/constants";
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/Loader";
import LinkCard from "../components/LinkCard";
import {Link} from "../interfaces";

const DetailPage: React.FC = () => {
  const {token} = useContext(AuthContext)
  const { request, loading } = useHttp()
  const [link, setLink] =  useState<Link | null>(null)
  const {id: linkId} = useParams<{id: string}>()

  const getLink = useCallback(async () => {
    try{
      const fetched = await request(`${getBaseUrl()}/api/link/${linkId}`, HttpMethods.GET, null, {
        Authorization: `Bearer ${token}`
      })
      setLink(fetched)
    } catch (e) {}
  }, [linkId, request, token]);

  useEffect(() => {
    getLink()
  },[getLink])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && link && <LinkCard link={link} />}
    </>
  );
};

export default DetailPage;
