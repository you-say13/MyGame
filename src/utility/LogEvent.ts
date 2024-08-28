import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics();

export function screenLog(screenName: string){
  logEvent(analytics, `[onScreen]  name:${screenName}`);
}

export function tapLog(conduct: string, screenName: string){
  logEvent(analytics, `[onTap]  name:${screenName}, conduct:${conduct}`);
}