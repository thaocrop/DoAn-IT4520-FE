import React from "react";

// components

import { CardStats } from "../Card";

export const HeaderStats = () => {
    return (
        <>
            {/* Header */}
            <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                    <div>
                        {/* Card stats */}
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12  px-4">
                                <CardStats
                                    statSubtitle="Bài Review"
                                    statTitle="350,897"
                                    statArrow="up"
                                    statPercent="3.48"
                                    statPercentColor="text-emerald-500"
                                    statDescripiron="Since last month"
                                    statIconName="far fa-chart-bar"
                                    statIconColor="bg-red-500"
                                />
                            </div>
                            <div className="w-full lg:w-6/12  px-4">
                                <CardStats
                                    statSubtitle="Người Dùng mới"
                                    statTitle="2,356"
                                    statArrow="down"
                                    statPercent="3.48"
                                    statPercentColor="text-red-500"
                                    statDescripiron="Since last week"
                                    statIconName="fas fa-chart-pie"
                                    statIconColor="bg-orange-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
