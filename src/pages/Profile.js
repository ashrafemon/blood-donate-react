import React, { useEffect } from "react";
import { FaShareAlt } from "react-icons/fa";
// import badges from "../constants/badges";
import { useDispatch, useSelector } from "react-redux";
import BloodDropImg from "../assets/images/bloodDrop.svg";
import {
    BadgeItem,
    BadgeItemAvatar,
    BadgeItemText,
    BadgeList,
    BadgeListItem,
    BadgeListItemAvatar,
    BadgeListItemText,
    Badges,
    BloodGroup,
    BloodGroupImage,
    BloodGroupText,
    Card,
    CardContent,
    CardContentImage,
    CardContentImageHeading,
    CardContentImageSubHeading,
    CardContentText,
    CardContentTitle,
    DonateList,
    DonateListItem,
    DonateListItemDate,
    DonateListItemDuration,
    DonateListItemHospital,
    DonateRequestTab,
    DonateRequestTabItem,
    FlexContentCol,
    FlexMyInfoCol,
    FlexRow,
    NextDonateProgressBar,
    NextDonateText,
} from "../components/profile/styled";
import UserLayout from "../layouts/UserLayout";
import { fetchBadges } from "../store/actions/profileActions";

const Profile = () => {
    const dispatch = useDispatch();
    const badges = useSelector((state) => state.profile.badges);
    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        dispatch(fetchBadges());
    }, [dispatch]);

    return (
        <UserLayout>
            <FlexRow>
                <FlexMyInfoCol>
                    <Card>
                        <CardContent>
                            <CardContentImage image="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                <CardContentImageHeading>
                                    {currentUser.name}
                                </CardContentImageHeading>
                                <CardContentImageSubHeading>
                                    Beginner Donor
                                </CardContentImageSubHeading>
                                <BloodGroup>
                                    <BloodGroupImage src={BloodDropImg} />
                                    <BloodGroupText>
                                        {currentUser.profile.blood_group}
                                    </BloodGroupText>
                                </BloodGroup>
                            </CardContentImage>

                            <CardContentTitle>Info</CardContentTitle>
                            <CardContentText>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet at cum, eligendi ipsa
                                neque numquam reprehenderit suscipit! Atque
                                consequuntur doloribus, earum, facilis itaque
                                minima nulla quasi quod totam ut voluptatem!
                            </CardContentText>
                            <CardContentTitle>
                                Badge <FaShareAlt />
                            </CardContentTitle>

                            <BadgeList>
                                {badges.map((item, index) => (
                                    <BadgeListItem key={index}>
                                        <BadgeListItemAvatar
                                            src={item.avatar}
                                        />
                                        <BadgeListItemText>
                                            {item.name}
                                        </BadgeListItemText>
                                    </BadgeListItem>
                                ))}
                            </BadgeList>

                            <NextDonateProgressBar value="20%" />
                            <NextDonateText>
                                <span>3</span> days until you can donate again.
                            </NextDonateText>
                        </CardContent>
                    </Card>
                </FlexMyInfoCol>
                <FlexContentCol>
                    <Card>
                        <CardContent>
                            <DonateRequestTab>
                                <DonateRequestTabItem isActive>
                                    Donate
                                </DonateRequestTabItem>
                                <DonateRequestTabItem>
                                    Request
                                </DonateRequestTabItem>
                            </DonateRequestTab>

                            <DonateList>
                                <DonateListItem>
                                    <DonateListItemDate>
                                        Dec <span>7</span>
                                    </DonateListItemDate>
                                    <DonateListItemHospital>
                                        Saint Sebastine Hospital
                                        <span>1 bag blood</span>
                                    </DonateListItemHospital>
                                    <DonateListItemDuration>
                                        6 days ago
                                    </DonateListItemDuration>
                                </DonateListItem>
                                <DonateListItem>
                                    <DonateListItemDate>
                                        Dec <span>7</span>
                                    </DonateListItemDate>
                                    <DonateListItemHospital>
                                        Saint Sebastine Hospital
                                        <span>1 bag blood</span>
                                    </DonateListItemHospital>
                                    <DonateListItemDuration>
                                        6 days ago
                                    </DonateListItemDuration>
                                </DonateListItem>
                                <DonateListItem>
                                    <DonateListItemDate>
                                        Dec <span>7</span>
                                    </DonateListItemDate>
                                    <DonateListItemHospital>
                                        Saint Sebastine Hospital
                                        <span>1 bag blood</span>
                                    </DonateListItemHospital>
                                    <DonateListItemDuration>
                                        6 days ago
                                    </DonateListItemDuration>
                                </DonateListItem>
                            </DonateList>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <CardContentTitle>Badge</CardContentTitle>

                            <Badges>
                                {badges.map((item, index) => (
                                    <BadgeItem key={index}>
                                        <BadgeItemAvatar src={item.avatar} />
                                        <BadgeItemText>
                                            {item.name}
                                        </BadgeItemText>
                                    </BadgeItem>
                                ))}
                            </Badges>
                        </CardContent>
                    </Card>
                </FlexContentCol>
            </FlexRow>
        </UserLayout>
    );
};

export default Profile;
