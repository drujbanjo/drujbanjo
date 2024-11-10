export const browserSearchConfig = (value: string) => {
	if (!value) return ""
	if (value.startsWith("http") || value.startsWith("www")) {
		return value
	} else {
		return `https://www.google.com/search?q=${value}&sca_esv=f9fa188a74abf180&sxsrf=ADLYWIJ-0wfnLIPYLAJYZ2uW6zICdcBr0w%3A1730642098727&source=hp&ei=soAnZ6uvKtiQwPAPkdmMwQ8&iflsig=AL9hbdgAAAAAZyeOwuO9JNIMEkcf2ki5ETbPodlgasa6&ved=0ahUKEwir0JqcqMCJAxVYCBAIHZEsI_gQ4dUDCBY&uact=5&oq=${value}&gs_lp=Egdnd3Mtd2l6IgJnaDIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIKEAAYgAQYQxiKBTIWEC4YgAQYsQMY0QMYQxiDARjHARiKBTILEAAYgAQYsQMYgwEyDRAAGIAEGLEDGEMYigUyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEAAYgAQYsQNIxwRQAFi9AXAAeACQAQCYAc0CoAHNAqoBAzMtMbgBA8gBAPgBAZgCAaAC2AKYAwCSBwMzLTGgB_4J&sclient=gws-wiz`
	}
}
