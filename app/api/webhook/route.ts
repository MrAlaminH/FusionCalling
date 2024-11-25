import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { phoneNumber, name, email } = await request.json();

    // Replace with your actual webhook URL
    const webhookUrl = 'https://hook.eu2.make.com/7zwcwg7699ehhbz23y2m2b2x9868oc22';

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber,
                name,
                email,
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            throw new Error('Webhook trigger failed');
        }

        return NextResponse.json({ message: 'Webhook triggered successfully' });
    } catch (error) {
        console.error('Error triggering webhook:', error);
        return NextResponse.json({ error: 'Failed to trigger webhook' }, { status: 500 });
    }
}
