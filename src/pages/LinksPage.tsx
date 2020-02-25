import React, {useCallback, useContext, useEffect, useState} from "react";
import {Link} from "../interfaces";
import {AuthContext} from "../context/AuthContext";
import {useHttp} from "../hooks/http.hook";
import {getBaseUrl} from "../config/baseUrl";
import {HttpMethods} from "../utils/constants";
import Loader from "../components/Loader";
import LinksList from "../components/LinksList";

const LinksPage: React.FC = () => {
  const [links, setLinks] = useState<Link[] | null>(null)
  const { loading, request} = useHttp();
  const { token } = useContext(AuthContext)

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request(`${getBaseUrl()}/api/link`, HttpMethods.GET, null, {
        Authorization: `Bearer ${token}`
      })
      setLinks(fetched)
    } catch (e) {

    }
  }, [request, token])

  useEffect(() => {
    fetchLinks()
  }, [fetchLinks])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {!loading && <LinksList links={links} />}
    </>
  );
};

export default LinksPage;
