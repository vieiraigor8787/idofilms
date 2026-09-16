import { Resend } from "resend";

export async function onRequestPost(context: any) {
    const resend = new Resend(context.env.RESEND_API_KEY);

    const { nome, email, data, local, mensagem } = await context.request.json();;

    function escapeHtml(text: string) {
        return text
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    try {
        await resend.emails.send({
            from: "Ido Films <noreply@idofilms.pt>",
            to: "ido@idofilms.pt",
            replyTo: email,
            subject: `Novo contacto de ${nome}`,
            html: `
        <h2>Novo pedido</h2>

        <p><strong>Nome:</strong> ${nome}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Data:</strong> ${data}</p>

        <p><strong>Local:</strong> ${local}</p>

        <p><strong>Mensagem:</strong></p>

        <p>${escapeHtml(mensagem)}</p>
      `,
        });

        return Response.json({ success: true });

    } catch (err) {

        console.error(err);

        return Response.json(
            {
                success: false,
                error: err instanceof Error ? err.message : "Erro interno"
            },
            {
                status: 500
            }
        );

    }
}