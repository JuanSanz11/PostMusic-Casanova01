import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns/';
import { ptBR } from 'date-fns/locale/pt-BR';

import { api } from '../services/api';

import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';
import styles from './home.module.scss';
import { usePlayer } from '../contexts/PlayerContext';

//interface
type Episode = {
    id: string,
    title: string,
    thumbnail: string,
    members: string,
    duration: number,
    durationAsString: string,
    url: string,
    publishedAt: string, 
};

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {

  const { playList } = usePlayer();

  const episodeList = [...latestEpisodes, ...allEpisodes];
  
  return (
    <div className={styles.homepage}>
    <Head>
      <title>Home | PostMusic</title>
    </Head>
    <section className={styles.latestEpisodes}>
      <h2>Ultimos lanzamientos</h2>
      <ul>
        {latestEpisodes.map((episode, index) => {
          return (
            <li key={episode.id}>
              <Image 
              width={192} 
              height={192} 
              src={episode.thumbnail} 
              alt={episode.title} 
              objectFit='cover'
              />

              <div className={styles.episodeDetails}>
                <Link href={`/episodes/${episode.id}`}>
                {episode.title}
                </Link>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </div>

              <button type="button" onClick={() => playList(episodeList, index) }>
                <img src="/playing.svg" alt="Reproducir episodio" />
              </button>
            </li>
          )
        })}
      </ul>
    </section>
    <section className={styles.allEpisodes}>
      <h2>Todas las musicas</h2>

      <table cellSpacing={0}>
        <thead>
          <tr>
          <th></th>
          <th>Musicas</th>
          <th>Integrantes</th>
          <th>Fecha</th>
          <th>Duración</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {allEpisodes.map((episode, index) => {
            return (
              <tr key={episode.id}>
                <td style={{ width: 72 }}>
                  <Image
                  width={120}
                  height={120}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit='cover' 
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                {episode.title}
                </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                    <img src="/play.svg" alt="Reproducir musica" />
                  </button>
                </td>
              </tr>
            )
         })}
        </tbody>
      </table>
    </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await api.get('episodes', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc'
      }
    });

    const episodes = data.map(episode => ({
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
    }));

    const latestEpisodes = episodes.slice(0, 2);
    const allEpisodes = episodes.slice(2);

    return {
      props: {
        latestEpisodes,
        allEpisodes,
      },
      revalidate: 60 * 60 * 8,
    };
  } catch (error) {
    console.error('Error al obtener episodios:', error);

    return {
      props: {
        latestEpisodes: [],
        allEpisodes: [],
      }
    };
  }
};