import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { phoneNumber, name, email, selectedAgent } = await request.json();

    // Replace with your actual webhook URL
    const webhookUrl = 'https://n8n.deployify.xyz/webhook/0c3c493b-d14f-49ca-ab8e-62d7d7a8c9c1';

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
                selectedAgent,
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
