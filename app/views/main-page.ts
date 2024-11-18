import { EventData, Page } from '@nativescript/core';
import { MainViewModel } from '../view-models/main-view-model';

let viewModel: MainViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    
    if (!viewModel) {
        viewModel = new MainViewModel();
    }
    
    page.bindingContext = viewModel;
}

export function onNewStory() {
    // Navigate to new story page
}