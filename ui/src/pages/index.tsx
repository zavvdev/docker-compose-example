import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import API_ENDPOINTS from "../constants/apiEndpoints";
import { UserInterface } from "../types/UserInterface";
import apiClient from "../utils/apiClient";
import { MovieInterface } from "../types/MovieInterface";

interface HomeProps {
  users: UserInterface[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { users } = props;

  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsFetching(true);

      const { data } = await apiClient.get<MovieInterface[]>(
        API_ENDPOINTS.getMovies,
      );
      setMovies(data);

      setIsFetching(false);
    } catch {
      setIsFetching(false);
      setMovies([]);
    }
  };

  return (
    <div>
      <div>
        <h1>Server-side data:</h1>
        {!!users.length &&
          users.map((user) => (
            <div key={user.id}>
              <div>
                <b>Name: </b> {user.name}
              </div>
              <div>
                <b>Age: </b> {user.age}
              </div>
              <br />
            </div>
          ))}
      </div>
      <div>
        <h1>Client-side data:</h1>
        {isFetching && (
          <>
            <div>
              <i>Loading..</i>
            </div>
            <br />
          </>
        )}
        {!isFetching &&
          !!movies.length &&
          movies.map((movie) => (
            <div key={movie.id}>
              <div>
                <b>Label: </b> {movie.label}.env copy
              </div>
              <br />
            </div>
          ))}
        <button type="button" onClick={fetchMovies} disabled={isFetching}>
          Fetch movies
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const { data } = await apiClient.get<UserInterface[]>(
      API_ENDPOINTS.getUsers,
    );
    return {
      props: {
        users: data,
      },
    };
  } catch (e) {
    return {
      props: {
        users: [],
      },
    };
  }
};

export default Home;
