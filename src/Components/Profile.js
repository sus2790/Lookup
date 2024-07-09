import React, { useState, useEffect } from 'react';
import './Profile.css';
import ImgAsset from '../public';
import axios from 'axios';
export default function Profile() {
    const [userId, setUserId] = useState('1130334020740321431');
    const [userData, setUserData] = useState(null);
    const [badges, setBadges] = useState([]);
    const [created_at, setCreated] = useState('');

    const handleInputChange = (e) => {
        setUserId(e.target.value);
    };

    useEffect(() => {
        const badge = {
            STAFF: 0,
            PARTNER: 1,
            HYPESQUAD: 2,
            BUG_HUNTER_LEVEL_1: 3,
            HYPESQUAD_ONLINE_HOUSE_1: 6,
            HYPESQUAD_ONLINE_HOUSE_2: 7,
            HYPESQUAD_ONLINE_HOUSE_3: 8,
            PREMIUM_EARLY_SUPPORTER: 9,
            BUG_HUNTER_LEVEL_2: 14,
            VERIFIED_DEVELOPER: 17,
            CERTIFIED_MODERATOR: 18,
            ACTIVE_DEVELOPER: 22,
        };

        const badgeAssets = {
            STAFF: ImgAsset.STAFF,
            PARTNER: ImgAsset.PARTNER,
            HYPESQUAD: ImgAsset.HYPESQUAD,
            BUG_HUNTER_LEVEL_1: ImgAsset.BUG_HUNTER_LEVEL_1,
            HYPESQUAD_ONLINE_HOUSE_1: ImgAsset.HYPESQUAD_ONLINE_HOUSE_1,
            HYPESQUAD_ONLINE_HOUSE_2: ImgAsset.HYPESQUAD_ONLINE_HOUSE_2,
            HYPESQUAD_ONLINE_HOUSE_3: ImgAsset.HYPESQUAD_ONLINE_HOUSE_3,
            PREMIUM_EARLY_SUPPORTER: ImgAsset.PREMIUM_EARLY_SUPPORTER,
            BUG_HUNTER_LEVEL_2: ImgAsset.BUG_HUNTER_LEVEL_2,
            VERIFIED_DEVELOPER: ImgAsset.VERIFIED_DEVELOPER,
            CERTIFIED_MODERATOR: ImgAsset.CERTIFIED_MODERATOR,
            ACTIVE_DEVELOPER: ImgAsset.ACTIVE_DEVELOPER,
        };
        function _getTimestamp(snowflake) {
            return new Date(snowflake / 4194304 + 1420070400000);
        }

        const _getBadges = (flagsValue) => {
            let badges = [];
            for (const [key, value] of Object.entries(badge)) {
                if (flagsValue & (1 << value)) {
                    badges.push({
                        className: key.toLowerCase(),
                        src: badgeAssets[key],
                    });
                }
            }
            return badges;
        };
        if (userId) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:3001/api/users/${userId}`,
                    );
                    setUserData(response.data);
                    setCreated(
                        _getTimestamp(response.data.id).toLocaleDateString(),
                    );
                    setBadges(_getBadges(response.data.flags));
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }
    }, [userId]);

    return (
        <div className="Profile_Container">
            <div className="Profile_Profile">
                <div className="Profile_1">
                    <div className="Body" />
                    <div
                        className="Banner"
                        style={{
                            backgroundColor:
                                userData &&
                                userData.banner_color &&
                                !userData.banner
                                    ? userData.banner_color
                                    : '',
                            backgroundImage:
                                userData && userData.banner
                                    ? `url(https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}.${userData.banner.startsWith('a_') ? 'gif' : 'png'}?size=4096&quality=lossless)`
                                    : '',
                        }}
                    />
                </div>
                <div className="Avatar">
                    <div className="Mask" />
                    <div
                        className="Image"
                        style={{
                            backgroundImage:
                                userData && userData.avatar
                                    ? `url(https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar.startsWith('a_') ? userData.avatar + '.gif' : userData.avatar + '.png'})`
                                    : 'https://cdn.discordapp.com/embed/avatars/0.png',
                            backgroundSize: '',
                            backgroundPosition: 'center',
                        }}
                    />
                </div>
                <div className="Name">
                    <span className="name">
                        {userData &&
                            (userData.global_name || userData.username)}
                    </span>
                    <span className="username">
                        {userData && userData.username}
                    </span>
                </div>
                <div className="Badge">
                    {badges.map((badge, index) => (
                        <div key={index} className="Background">
                            <div className="Icon">
                                <img
                                    className={badge.className}
                                    src={badge.src}
                                    alt={badge.className}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Date">
                    <div className="Createdat">
                        <span className="Time">{userData && created_at}</span>
                        <span className="Label">帳號創建時間</span>
                    </div>
                </div>
                <div className="Search_Search">
                    <span className="Search_Label">Discord Lookup</span>
                    <div className="InputBox">
                        <input
                            type="text"
                            value={userId}
                            onChange={handleInputChange}
                            placeholder="輸入用戶ID"
                            className="InputLabel"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
