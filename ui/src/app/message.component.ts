import { Component } from '@angular/core';

@Component({
    'selector': 'message',
    'templateUrl': './message.component.html'
})

export class MessageComponent {
    messages = [
        { 'name': 'Bianca', 'profession': 'Product manager' },
        { 'name': 'Justin', 'profession': 'Developer' },
    ];
}