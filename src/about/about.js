import './about.css';
import CommitCardList from '../scripts/components/CommitCardList';
import CommitCard from '../scripts/components/CommitCard';
import GithubApi from '../scripts/modules/GithubApi';

import { createTimeFormat } from '../scripts/utils/helpers';

const commitCardsContainer = document.querySelector('.swiper-wrapper');
const buildCardItem = (cardData) => new CommitCard(cardData, createTimeFormat);

const commitCardList = new CommitCardList(commitCardsContainer, buildCardItem);
const githubApi = new GithubApi();

githubApi.getCommits()
    .then((res) => {
        // Берем последние 6 коммитов
        const cards = res.slice(0, 6);
        commitCardList.renderCards(cards);

        setTimeout(() => {
            const swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                slidesPerView: 3,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    }
                }
            });
        }, 0)
    })
    .catch((err) => {
        console.log(err);
    })
