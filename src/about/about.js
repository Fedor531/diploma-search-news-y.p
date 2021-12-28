import './about.css';
import CommitCardList from '../scripts/components/CommitCardList'
import CommitCard from '../scripts/components/CommitCard'
import GithubApi from '../scripts/modules/GithubApi'
import { createTimeFormat } from '../scripts/utils/helpers'

// const $commitCardsContainer = document.querySelector('.glide__slides')

const buildCardItem = (cardData) => new CommitCard(cardData, createTimeFormat)

// const commitCardList = new CommitCardList($commitCardsContainer, buildCardItem)
const githubApi = new GithubApi()

githubApi.getCommits()
    .then((res) => {
        // commitCardList.renderCards(res)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {

    })
