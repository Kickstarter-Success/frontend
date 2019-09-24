import React from "react";
import { Link } from 'react-router-dom';

export default function CampaignCard({campaign}) {
  return (
    <>
    <p>Campaign:{campaign.campaignName}</p>
    <p>Category:{campaign.categories}</p>
    <p>Monetary Goal:{campaign.monetaryGoal}</p>
    <p>Duration:{campaign.duration}</p>
    <p>Country:{campaign.country}</p>
    <p>Status:{campaign.status}</p>
    <Link to="#">
        <button>
        Campaign Details
        </button>
    </Link>
    </>
  );
}
