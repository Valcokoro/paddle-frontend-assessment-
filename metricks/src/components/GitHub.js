import React, {useEffect} from 'react';
import { fetchRepos } from '../actions';
import {useSelector, useDispatch} from 'react-redux';
import '../styles/GitHub/GitHub.css';



const GitHub = () => {
    const { repos } = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchReposData = () => {

        dispatch(fetchRepos())
    }

    useEffect(() => {
        fetchReposData();

    }, []);

    console.log('Repos', repos)

    const repositories = repos[0]?.items.map((repo, index) => {
        return (
            <li className='repo-name' key={index}>
              <p className='list1'>{repo.name}</p>
              <p className='list2'>{repo.description}</p>
              <p className='list3'>{`Stars: ${repo.stargazers_count}`}</p>
              <p className='list4'>{`Issues: ${repo.open_issues}`}</p>
              <p className='list5'>{`Submitted 30 days ago by ${repo.name}`}</p>
              <img src={repo.owner.avatar_url} alt='avatar'  className='avatar'/>
            </li>
        )
    })

    


    return (
        <section className='github-page'>
            <ul className='list'>
             <div>
              {repositories}
             </div>
            </ul>
        </section>
    )
}


export default GitHub;