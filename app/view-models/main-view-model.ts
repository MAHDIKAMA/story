import { Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _popularStories: Array<any>;
    private _latestStories: Array<any>;
    private _challenges: Array<any>;

    constructor() {
        super();

        // Initialize with dummy data
        this._popularStories = [
            {
                title: "سفر به ناشناخته‌ها",
                author: "علی محمدی",
                description: "داستانی هیجان‌انگیز درباره سفری عجیب...",
                likes: "۱۲۳"
            },
            {
                title: "در جستجوی حقیقت",
                author: "مریم احمدی",
                description: "معمایی پیچیده که باید حل شود...",
                likes: "۹۸"
            }
        ];

        this._latestStories = [
            {
                title: "عشق در پاییز",
                author: "سارا کریمی",
                description: "داستان عاشقانه‌ای که در پاییز رخ می‌دهد...",
                date: "۱۴۰۲/۱۰/۱۵"
            }
        ];

        this._challenges = [
            {
                title: "چالش داستان کوتاه",
                description: "یک داستان کوتاه با موضوع امید بنویسید",
                deadline: "مهلت: ۳ روز"
            }
        ];

        this.notifyPropertyChange('popularStories', this._popularStories);
        this.notifyPropertyChange('latestStories', this._latestStories);
        this.notifyPropertyChange('challenges', this._challenges);
    }

    get popularStories(): Array<any> {
        return this._popularStories;
    }

    get latestStories(): Array<any> {
        return this._latestStories;
    }

    get challenges(): Array<any> {
        return this._challenges;
    }
}