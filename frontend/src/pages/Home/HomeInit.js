import "./Home.css";

// components
import LikeContainer from "../../components/LikeContainer";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// Redux
import { getPhotos, like } from "../../slices/photoSlice";

const HomeInit = () => {
  const dispatch = useDispatch();

  const resetMessage = useResetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);
  const { photos, loading } = useSelector((state) => state.photo);

  // Load all photos
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const handleLike = (photo = null) => {
    dispatch(like(photo._id));

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="home">
      <h2>Seja bem vindo ao</h2>
      <h1>Cãonecta Aumor</h1>
      {Array.isArray(photos) && photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <Link className="btn" to={`/photos/${photo._id}`}>
              Ver mais
            </Link>
          </div>
        ))
      ) : (
        <h2 className="no-photos">
          {photos && photos.length === 0 ? (
            <span>
              Ainda não há fotos publicadas,{" "}
              <Link to={`/users/${user.userId}`}>clique aqui</Link> para começar.
            </span>
          ) : (
            "Não foi possível carregar as fotos."
          )}
        </h2>
      )}
    </div>
  );
};

export default HomeInit;