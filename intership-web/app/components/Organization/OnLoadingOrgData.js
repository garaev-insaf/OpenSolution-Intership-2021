import * as React from "react";
import { useState, useEffect } from "react";

function OnLoadingOrgData(Component) {
    return function LoadingOrganizationsData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export {OnLoadingOrgData}